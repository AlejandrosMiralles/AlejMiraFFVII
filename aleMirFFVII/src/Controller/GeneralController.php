<?php

namespace App\Controller;

use App\Entity\Feedback;

use Doctrine\Persistence\ManagerRegistry;
use ErrorException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GeneralController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('general/index.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }

    #[Route('/informacionJuego', name: 'app_generalInfo')]
    public function generalInfo(): Response
    {
        return $this->render('general/generalInfo.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }

    #[Route('/sendFeedback', name: 'app_sendFeedback')]
    public function sendFeeback(ManagerRegistry $doctrine, Request $request): JsonResponse{
        $feedbackContent = $request->request->get("feedback");

        $feedback = new Feedback();
        $feedback->setContent($feedbackContent);

        try{
            if (null == $feedbackContent ){
                $errorMessage = "Feedback can not be null";
                throw new ErrorException($errorMessage);
            }

            $entityManager = $doctrine->getManager();
            $entityManager->persist($feedback);
            $entityManager->flush();

            $result = [ "result" => "Success"];
            $responseStatus = Response::HTTP_OK ; 
        } catch (\Exception $e){
            $result = [ "result" => "Failure",
                        "error" => $e->getMessage()
            ];
            $responseStatus = Response::HTTP_BAD_REQUEST;
        }

        return new JsonResponse($result, $responseStatus);
    }
}
