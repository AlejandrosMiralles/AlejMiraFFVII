<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GeneralController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('general/index.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }

    #[Route('/informacionJuego', name: 'generalInfo')]
    public function generalInfo(): Response
    {
        return $this->render('general/generalInfo.html.twig', [
            'controller_name' => 'GeneralController',
        ]);
    }
}
