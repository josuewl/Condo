# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-advogada.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Ana Silva</TD>
	</TR>
	<TR>
		<TD>Idade: 32<BR><BR>
    Ocupação: Advogada.
  <TD><BR>
<BR>
  Dados Principais: Mãe solteira, mora com seu filho de 6 anos.
</TR>
<TD>Objetivos:<BR>
Encontrar atividades para seu filho e ela mesma, busca interação social no condomínio.
</TD>
<TD>Frustrações:<BR>
  Dificuldade em manter a agenda organizada durante horários de pico, levando a atrasos e insatisfação dos clientes.
Falta de uma ferramenta eficaz para gerenciar o estoque de produtos de barbearia.
<TD>Hábitos:<BR>
Trabalha em horários flexíveis, gosta de praticar esportes ao ar livre nos fins de semana.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-empresario.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Carlos Oliveira</TD>
	</TR>
	<TR>
		<TD>Idade: 32<BR><BR>
    Ocupação: Empresário.
  <TD><BR>
<BR>
Dados Principais: Morador recente no condomínio, casado e sem filhos.
</TR>
<TD>Objetivos:<BR>
Conhecer seus vizinhos, participar de eventos sociais no condomínio.
</TD>
<TD>Frustrações:<BR>
Pouco conhecimento sobre as atividades no condomínio, deseja se integrar à comunidade.
<TD>Hábitos:<BR>
Trabalha longas horas, gosta de relaxar em casa nos fins de semana, aprecia eventos sociais.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-profissionalMarketing.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Lucas Oliveira</TD>
	</TR>
	<TR>
		<TD>Idade: 28<BR><BR>
    Ocupação: Profissional de Marketing.
  <TD><BR>
<BR>
Solteiro, gosta de organizar eventos sociais no condomínio.
</TR>
<TD>Objetivos:<BR>
Criar uma atmosfera social no condomínio, promovendo eventos e atividades para os moradores.
</TD>
<TD>Frustrações:<BR>
Poucas oportunidades para interação social, deseja criar uma comunidade mais unida..
<TD>Hábitos:<BR>
Trabalha em home office, entusiasta de esportes e jogos, sempre disposto a socializar.</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-familiaMedica.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Larissa Souza</TD>
	</TR>
	<TR>
		<TD>Idade: 38<BR><BR>
    Ocupação: Médica.
  <TD><BR>
<BR>
  Dados Principais: Mãe de dois filhos, casada com outro profissional de saúde.
</TR>
<TD>Objetivos:<BR>
Encontrar espaços seguros para as crianças, participar de atividades em família no condomínio.
</TD>
<TD>Frustrações:<BR>
Dificuldade em conciliar horários familiares, falta de espaços adequados para crianças.
<TD>Hábitos:<BR>
Horários irregulares de trabalho, busca atividades em família nos fins de semana.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-aposentado.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Ricardo Santos</TD>
	</TR>
	<TR>
		<TD>Idade: 60<BR><BR>
    Ocupação: Aposentado.
  <TD><BR>
<BR>
  Dados Principais: Viúvo, vive sozinho no condomínio.
</TR>
<TD>Objetivos:<BR>
Deseja encontrar companhia, participar de atividades culturais no condomínio.
</TD>
<TD>Frustrações:<BR>
Solidão, falta de atividades culturais e sociais direcionadas para sua faixa etária.
<TD>Hábitos:<BR>
Participa de grupos de leitura, gosta de jardinagem, tem interesse em atividades culturais.</TD>
</TR>  
</TABLE>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Silva           | Encontrar atividades para mim e meu filho, buscar interação social no condomínio | Como uma advogada e mãe solteira, quero encontrar atividades recreativas para mim e meu filho de 6 anos, possibilitando a interação social no condomínio. Desejo poder reservar espaços de lazer, como a piscina, considerando a segurança das crianças e a disponibilidade de horários familiares.|
|Carlos Oliveira     | Conhecer vizinhos e participar de eventos sociais no condomínio | Como um empresário recém-mudado para o condomínio, quero conhecer meus vizinhos e participar de eventos sociais. Gostaria de utilizar o aplicativo para descobrir e reservar espaços de lazer, como o salão de festas, facilitando a integração com a comunidade. |
|Lucas Oliveira       | Criar uma atmosfera social no condomínio, promovendo eventos e atividades para os moradores | Como profissional de marketing e entusiasta de eventos, desejo criar uma atmosfera social no condomínio. Utilizarei o aplicativo para organizar eventos e reservar espaços, como a academia, promovendo a interação e fortalecendo os laços comunitários.|
|Larissa Souza       | Encontrar espaços seguros para as crianças e participar de atividades em família no condomínio | Como médica e mãe de dois filhos, busco espaços seguros para as crianças e atividades em família no condomínio. Utilizarei o aplicativo para reservar espaços adequados, como a piscina, garantindo o bem-estar e a diversão da minha família.|
|Ricardo Santos      | Encontrar companhia e participar de atividades culturais no condomínio | Como aposentado e viúvo, desejo encontrar companhia e participar de atividades culturais no condomínio. Utilizarei o aplicativo para reservar espaços como a churrasqueira e receber notificações sobre eventos culturais, combatendo a solidão e enriquecendo minha vida.|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, nos condomínios residenciais, o gerenciamento dos espaços de lazer é realizado de forma manual, com reservas feitas por meio de agendas físicas ou comunicação verbal com a administração. Isso leva a uma série de problemas, como a falta de visibilidade sobre a disponibilidade dos espaços, a dificuldade em realizar reservas e a ocorrência frequente de conflitos entre os moradores.

Limitações do Processo Atual:
- Falta de transparência na disponibilidade dos espaços.
- Dificuldade em garantir uma distribuição equitativa e justa do acesso aos espaços.
- Ausência de um sistema formal para monitorar e gerenciar as reservas.
 

### Descrição Geral da Proposta

A proposta visa abordar os problemas identificados na situação atual, fornecendo uma solução tecnológica que facilite o gerenciamento eficiente dos espaços de lazer nos condomínios residenciais. A solução proposta consiste na criação de um aplicativo móvel intuitivo, denominado "Meu Condomínio", que permitirá aos moradores verificar a disponibilidade dos espaços, fazer reservas de forma simples e garantir uma distribuição equitativa do acesso.

Objetivos da Proposta:
- Facilitar o acesso aos espaços de lazer para os moradores.
- Promover uma distribuição justa e organizada do acesso aos espaços comuns.
- Facilitar a gestão e administração dos espaços de lazer para os gestores (síndicos).
- Melhorar a experiência dos moradores nos condomínios residenciais.


### Processo 1 – Login Condômino (Morador).


![Processo 1](img/bpmn-processo1.png)

### Processo 2 – Login & Cadastro dos Administradores (Síndicos).


![Processo 2](img/bpmn-processo2.png)

### Processo 3 – Cadastro e manutenção de espaços (Realizado pela administração)


![Processo 3](img/bpmn-processo3.png)

### Processo 4 – Cadastro dos usuários (Realizado pela administração)

![Processo 4](img/bpmn-processo4.png)

### Processo 5 – Reservas realizadas na plataforma pelos moradores


![Processo 5](img/bpmn-processo5.png)

### Processo 6 – Cadastro e manutenção de dependentes realizadas na plataforma pelos moradores


![Processo 6](img/bpmn-processo6.png)


## Indicadores de Desempenho

![Indicadores de Desempenho](img/indicadoresDesem.png.png)

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID     | Descrição do Requisito                  | Prioridade |
| ------ | --------------------------------------- | ---------- |
| RF-001 | O aplicativo deve permitir CRUD do condomínio| ALTA       |
| RF-002 | O aplicativo deve ser protegido por autenticação de login e senha. | ALTA      |
| RF-003 | O aplicativo deve permitir o CRUD dos condôminos. | ALTA |
| RF-004 | O aplicativo deve permitir a administração optar por quais espaços serão exibidos aos condôminos. | ALTA |
| RF-005 | O aplicativo deve disponibilizar CRUD de reserva de piscina aos condôminos | BAIXA |
| RF-006 | O aplicativo deve disponibilizar CRUD de reserva de salão de festas aos condôminos | BAIXA |
| RF-007 | O aplicativo deve disponibilizar CRUD de reserva da academia aos condôminos | BAIXA |
| RF-008 | O aplicativo deve disponibilizar CRUD de reserva da churrasqueira aos condôminos | BAIXA |
| RF-009 | O aplicativo deve permitir ao condômino realizar o CRUD de reservas dos espaços de lazer disponibilizados pelo condomínio. | ALTA |
| RF-010 | O aplicativo deve permitir à administração do condomínio realizar o CRUD dos espaços oferecidos. | ALTA |
| RF-011 | O aplicativo deve oferecer funcionalidades de manutenção, gerência de disponibilidade dos espaços e limitações de capacidade de acesso, garantindo que não fiquem superlotados, cumprindo regulamentos de segurança e aplicando as regras de negócio. | ALTA |
| RF-012 | O aplicativo deve enviar notificação ao condôminio sobre sua reserva estar próxima. | BAIXA |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                            | Prioridade |
| ------- | ----------------------------------------------------------------- | ---------- |
| RNF-001 | O aplicativo deve incluir uma página inicial de apresentação.| MÉDIA |
| RNF-002 | Os dados dos usuários, incluindo informações pessoais e senhas, devem ser armazenados de forma segura e criptografada, garantindo a proteção contra acesso não autorizado. | ALTA |
| RNF-003 | O aplicativo deve ser responsivo, garantindo tempos de resposta curtos para evitar a frustração do usuário. | ALTA |
| RNF-004 | O aplicativo deve ser escalável para suportar um aumento significativo no número de usuários. | ALTA |
| RNF-005 | O aplicativo deve possuir um medidas de backup e recuperação para garantir a disponibilidade contínua dos dados e funcionalidades em caso de falha do sistema. | ALTA |
| RNF-006 | A interface do usuário deve ser intuitiva e fácil de usar, inclusive para usuários sem experiência prévia em aplicativos similares. | ALTA |
| RNF-007 | O aplicativo deve ser desenvolvido de forma a ser compatível com o sistema operacional Android. | ALTA |
| RNF-008 | O aplicativo deve ser desenvolvido com uma estrutura bem organizada e modular, a fim de facilitar a manutenção e a adição de novos recursos no futuro. | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre letivo, com data limite estabelecida em 23/06/2024 para garantir o cumprimento do prazo. |
| 02  | O projeto deverá aderir ao cronograma estabelecido para cada etapa de entrega, a fim de evitar a possibilidade de atrasos significativos. |
| 03  | O projeto deve ser planejado e executado dentro dos recursos financeiros disponíveis, incluindo custos relacionados a hardware, software, ferramentas de desenvolvimento e quaisquer outros gastos associados ao projeto. |
| 04  | A equipe deverá desenvolver o projeto com base no aprendizado obtido na universidade, sendo proibida a terceirização do desenvolvimento do trabalho. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

<img src='./img/diagramaCasoDeUso.png'>


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. [Acesse a Matriz Aqui](https://docs.google.com/spreadsheets/d/1k2EgexrNYk0RnOKNNShHfIKMUCSfDb2Oha73zHA1ILM/edit?usp=sharing)



<img src='img/MatrizRatreabilidade.png'>

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Gráfico de Grant do projeto Meu Condominio organizado para gerenciar as tarefas dentro do projeto e estimar o tempo necessário para conclusão.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/abc06550-ce52-47f5-84c2-70d3a4a4efa6) 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/4432f430-e5a3-4b77-b46c-c2cdc089feb0)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/4d2e078e-fe71-42a7-9af2-71679b763bdc)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/0c773417-e9f5-476e-bc48-b0da3932f8b6)


O Project com o cronograma completo está disponível no link a seguir: [Cronograma Meu Condomínio](https://drive.google.com/drive/folders/1uam2S1hAt20Tv7w0WMAYofgmHaNS_jjJ?usp=drive_link)


## Gerenciamento de Equipe

A gestão de equipe se dará pelo Github, conforme tela apresentada abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/be2ad15c-056a-4720-9608-9275534f806d)


O gerenciamento com mais detalhes se encontra disponível no link a seguir: [Meu Condominio](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/814/views/1)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

A divisão orçamentária do projeto ficou determinada da seguinte forma:
- Custo Cliente: R$189.000,00
- Custo Empresta: R$130.340,00
- Lucro Empresa: R$58.660,00
- Tempo de execução: 5 meses, 840 horas aproximadamente.

Abaixo o detalhamento dos valores:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130249437/c0d5892a-9082-4047-8ed3-166105913c0b)

Planilha disponível no link a seguir: [Meu Condominio - Orçamento](https://docs.google.com/spreadsheets/d/1itAQYCJMgxQk3AZ7dOz3hDPnDEInjPtk/edit?usp=sharing&ouid=117819638626584138761&rtpof=true&sd=true)
