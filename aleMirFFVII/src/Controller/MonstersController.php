<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MonstersController extends AbstractController
{
    #[Route('/monstruos', name: 'app_monsters')]
    public function index(): Response{
        return $this->render('monsters/index.html.twig', [
            'controller_name' => 'MonstersController',
        ]);
    }

    #[Route('/monstruos/joker', name: 'app_monsters_joker')]
    public function joker(): Response{
        return $this->render('monsters/joker.html.twig', [
            'controller_name' => 'MonstersController',
        ]);
    }

    #[Route('/monstruos/soldadoRaso', name: 'app_monsters_soldadoRaso')]
    public function soldadoRaso(): Response{
        return $this->render('monsters/soldadoRaso.html.twig', [
            'controller_name' => 'MonstersController',
        ]);
    }

    #[Route('/monstruos/ladron', name: 'app_monsters_ladron')]
    public function ladron(): Response{
        return $this->render('monsters/ladron.html.twig', [
            'controller_name' => 'MonstersController',
        ]);
    }

    #[Route('/monstruos/serpienteKalm', name: 'app_monsters_serpienteKalm')]
    public function serpienteKalm(): Response{
        return $this->render('monsters/serpienteKalm.html.twig', [
            'controller_name' => 'MonstersController',
        ]);
    }
}
