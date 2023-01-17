<?php

namespace App\Controller;

use App\Entity\Feedback;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    public function adminDashboard(): Response{
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        // or add an optional message - seen by developers
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        
        new Response("Sí que puedes entrar");
    }


    #[Route('/admin/manageFeedback', name: 'manage_feedback')]
    public function manageFeedback(ManagerRegistry $doctrine): Response{

        $repository = $doctrine->getRepository(Feedback::class);
        $feedbacks = $repository->findAll();
        
        return $this->render('admin/manageFeedback.html.twig', [
            'controller_name' => 'AdminController',
            'feedbacks' => $feedbacks
        ]);
    }


    #[Route('/admin/deleteFeedback', name: 'delete_feedback')]
    public function deleteFeedback(ManagerRegistry $doctrine, Request $request): JsonResponse{
        $id = $request->request->get("id");
        $repository = $doctrine->getRepository(Feedback::class);
        $feedbackToDelete = $repository->find($id);
        $entityManager = $doctrine->getManager();

        try{
            $entityManager->remove($feedbackToDelete);
            $entityManager->flush();

            $responseStatus = Response::HTTP_OK ; 
            $json = [ "elimination" => "succesful"  ];
        } catch(\Exception $e){
            $responseStatus = Response::HTTP_BAD_REQUEST;
            $json = [ "elimination" => "failed"  ];
        }

        return new JsonResponse($json, $responseStatus);
    }



}
