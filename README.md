# Proiect-MDS

Componenta :


Istrate Alexandru-Cristian, grupa 331;

Mustatoiu Ioan-Sebastian, grupa 332;

Tema proiectului : Biblioteca online.

Link Backlog: https://trello.com/b/UTkPktMe/sprint-board

Demo: https://www.youtube.com/watch?v=PkutoRzc6vs

## User stories

1. Ca un utilizator înregistrat, doresc să pot căuta și rezerva cărți online, astfel încât să pot accesa resursele bibliotecii în mod eficient.

2. Ca un bibliotecar, doresc să pot gestiona inventarul de cărți, inclusiv adăugarea, actualizarea și ștergerea cărților, pentru a menține o bază de date precisă.

3. Ca un cititor pasionat, doresc să pot vedea recenzii și evaluări ale cărților, astfel încât să pot alege lecturi de calitate.

4. Ca un utilizator nou, doresc să pot înregistra un cont, astfel încât să pot accesa serviciile bibliotecii online.

5. Ca utilizator înregistrat, doresc să pot solicita împrumutul unei cărți din bibliotecă, astfel încât să pot accesa și să citesc cărțile dorite în confortul casei mele.

6. Ca un utilizator înregistrat, doresc să pot prelungi termenul de împrumut al cărților, pentru a evita penalizările.

7. Ca un bibliotecar, doresc să pot gestiona cererile de împrumut și returnare, pentru a asigura o experiență fluidă pentru utilizatori.

8. Ca un utilizator înregistrat, doresc să pot vizualiza istoricul împrumuturilor mele, pentru a urmări cărțile pe care le-am citit.

9. Ca administrator, doresc sa pot tine evidenta celor mai populare carti, pentru a lua decizii informate cu privire la suplimentarea stocului.

10. Ca cititor, doresc sa pot vizualiza informatii aditionale despre carti, precum autor, editura, an aparitie, descriere, pentru a-mi putea face o alegere informata in legatura cu imprumutarea cartii.

11. Ca utilizator inregistrat, doresc sa primesc confirmare prin email cu privire la actiunile mele de imprumut, cat si reminders cu privire la apropierea termenului de inapoiere, pentru a fi informat și pentru a-mi aminti să returnez cărțile la timp.

## Backlog Creation

Pentru gestionarea taskurilor, am folosit Trello. Pe langa backlog principal, fiecare dintre cele 3 sprinturi a continut propriul backlog.

<img width="1680" alt="SCR-20240612-taip" src="https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/164894a1-7395-4e51-a659-21eb66331ced">


## Diagrama baza de date

![image](https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/a55c5a7c-2aec-4d7e-866e-54b05ab85f04)

## Raportare bug

In urma testarii functionalitatii de cautare si filtrare carti , am observat ca in anumite cautari, unele carti apareau ca facand parte din toate genurile.

Cauza problemei: Implementarea query-ului in Laravel.

‌
Query corect
```SQL
SELECT *
FROM books
WHERE (title LIKE ‘%…%' OR author LIKE '%…%’)
AND category IN listaCategoriiBifate
AND publisher IN listaPublisheriBifati;
```

Query generat de cod

```SQL
SELECT *
FROM books
WHERE title LIKE ‘%…%' OR author LIKE '%…%’
AND category IN listaCategoriiBifate
AND publisher IN listaPublisheriBifati;
```

A se observa ca in interogarea generata de cod, primele doua conditii din clauza WHERE nu sunt grupate.

Pentru a reproduce bug-ul : Se introduce in cautare o secventa de litere regasita in titlul unei carti. Astfel, evaluarea conditiilor din clauza WHERE se opreste la prima conditie : title LIKE ‘%…%’ , iar aplicarea diferitelor filtre este ignorata.

<img width="1680" alt="image" src="https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/ed7ede79-3b05-4257-8679-b59caec143a5">

Fix commit : https://github.com/sebastianMustatoiu/Proiect-MDS/commit/6db20f910d09e120f03768d8196689875668f446

## Design patterns

### Model View Controller

<img width="1679" alt="image" src="https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/000f1d7d-845b-4b44-b453-2bb851151e1b">

### Middleware

<img width="1038" alt="image" src="https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/ae602fba-15f6-47e9-80ac-57f5b9980816">

### Factory

<img width="1680" alt="image" src="https://github.com/sebastianMustatoiu/Proiect-MDS/assets/149588114/56c30473-712c-4af5-8e24-def1a4f4b44e">
