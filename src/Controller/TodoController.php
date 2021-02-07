<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/todo", name="todo_")
 */
class TodoController extends AbstractController
{
    private $todoRepository;

    public function __construct(TodoRepository $todoRepository)
    {
        $this->todoRepository = $todoRepository;
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/", name="todo", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->json($this->todoRepository->findToDo());
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/done", name="done", methods={"GET"})
     */
    public function done(): Response
    {
        return $this->json($this->todoRepository->findDone());
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/all", name="all", methods={"GET"})
     */
    public function all(): Response
    {
        return $this->json($this->todoRepository->findAll());
    }

    // THIS IS A ROUTE FOR REACT AXIOS POST REQUEST AND HANDLING FRONT VIEW BY REACT
    /**
     * @Route("/add", name="add", methods={"GET","POST"})
     */
    public function add(Request $request): Response
    {
        // if the request is post then it come from Axios React Form Data (assets/components/TodoForm.jsx)
        if ($request->getMethod() === 'POST') {
            $todo = new Todo();
            $data = json_decode(
                $request->getContent(),
                true
            );
            $todo->setTitle($data['title']);
            if (!empty($data['description'])) {
                $todo->setDescription($data['description']);
            }
            $todo->setTodoBefore(new DateTime($data['before']));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($todo);
            $entityManager->flush();
            // When the form is submitted I return a json response to REACT
            return $this->json("Created todo id: " . $todo->getId(), 200);
        }
        // need to take the hand on the displaying so i use the default template view with the div#root
        return $this->render('default/index.html.twig');
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/data/{id}", name="data", methods={"GET"})
     */
    public function getTodo(Todo $todo): Response
    {
        return $this->json($todo, 200);
    }

    // THIS IS A ROUTE FOR HANDLING FRONT VIEW BY REACT
     /**
     * @Route("/see/{id}", name="todo_show", methods={"GET"})
     */
    public function show(Todo $todo): Response
    {
        return $this->render('default/index.html.twig');
    }

    // THIS IS A ROUTE FOR REACT AXIOS POST REQUEST AND HANDLING FRONT VIEW BY REACT
    /**
     * @Route("/edit/{id}", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Todo $todo): Response
    {
        if ($request->getMethod() === 'POST') {
            $data = json_decode(
                $request->getContent(),
                true
            );
            $todo->setTitle($data['title']);
            $todo->setDescription($data['description']);
            $todo->setTodoBefore(new DateTime($data['before']));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($todo);
            $entityManager->flush();

            return $this->json('Todo edited', 200);
        }
        return $this->render('default/index.html.twig');
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, Todo $todo): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($todo);
        $entityManager->flush();

        return $this->json('Todo deleted', 200);
    }

    // THIS IS A ROUTE FOR REACT AXIOS CALL
    /**
     * @Route("/is-done/{id}", name="is_done", methods={"PATCH"})
     */
    public function isDone(Request $request, Todo $todo): Response
    {
        $todo->setIsDone(true);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($todo);
        $entityManager->flush();

        return $this->json('Todo is set as done', 200);
    }
}
