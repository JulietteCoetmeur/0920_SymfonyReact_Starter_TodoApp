<?php

namespace App\Repository;

use App\Entity\Todo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Todo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Todo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Todo[]    findAll()
 * @method Todo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Todo::class);
    }

    /**
     * @return Todo[] Returns an array of Todo objects
     */
    public function findAll()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.todoBefore', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Todo[] Returns an array of Todo objects
     */
    public function findTodo()
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.isDone = :val')
            ->orderBy('t.todoBefore', 'ASC')
            ->setParameter('val', false)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Todo[] Returns an array of Todo objects
     */
    public function findDone()
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.isDone = :val')
            ->orderBy('t.todoBefore', 'ASC')
            ->setParameter('val', true)
            ->getQuery()
            ->getResult();
    }

    /*
    public function findOneBySomeField($value): ?Todo
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
