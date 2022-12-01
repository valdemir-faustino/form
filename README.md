
  ### 🕹️ Totorial para criar o banco da maneira correta:
  
  - Clicar em CRIAR NOVO PROJETO
  - Escrever o nome do PROJETO.
  - Deixar CHEKBOX desmarcado.
  ![image](https://user-images.githubusercontent.com/60610011/205065174-4ba88ab6-9a50-4167-911c-c12df031c7ac.png)
  - Enviar esses dados.
  
  - CLICAR REALTIME DATA BASE.
  ![image](https://user-images.githubusercontent.com/60610011/205066485-7fdb767b-0f68-4370-a465-fa3f1f452e57.png)

  - CLICAR EM CRIAR BANCO
  ![image](https://user-images.githubusercontent.com/60610011/205067387-82041ff7-aefe-4f81-8b6a-e39b59a5c8d6.png)
  
  - ESCOLHER A REGIÃO
  - ESCOLHER NO MODO BLOQUEADO
  - ESCOLHER NO MODO BLOQUEADO
  - CLICAR EM CRIAR BANCO

  - Apos, clicar em regras, editalas de acordo com o print, e publicar a alteração 

![image](https://user-images.githubusercontent.com/60610011/205070766-72cb057f-9ccd-440e-856f-0c085bc327fa.png)

 - Colocar a seguinte politica de para o banco.
{
  "rules": {
    ".read": false,
    ".write": true
  }
}

 - CLICAR em FIRESTORE DATABASES

![image](https://user-images.githubusercontent.com/60610011/205071621-7b58b2f9-a876-433c-93c3-d3635c10d2f7.png)

 - CLICAR EM CRIAR BANCO 

![image](https://user-images.githubusercontent.com/60610011/205072013-5d53b462-964a-4ece-926a-63c3fcfd825e.png)

 - INICIAR MODO DE PRODUÇÃO

![image](https://user-images.githubusercontent.com/60610011/205072255-cfce7bb9-f164-4c94-b98c-18dd17f457bf.png)

 - Se aparecer essa tela, deve clicar em ATIVAR, se nao clique tambem em ativar, os arquivos seram aprovisionados

![image](https://user-images.githubusercontent.com/60610011/205072430-e7d4e9e6-d7e5-4700-94cc-e4c8b1e2e8d7.png)

 - CLICAR em regras, editar as politicas e publicar

![image](https://user-images.githubusercontent.com/60610011/205073690-5817b0cb-b94b-4f73-86cf-c677bf6bfe0b.png)

allow read: if false;
allow write: if true;