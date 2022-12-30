# TicTacToe
Jeu du morpion/Tic-tac-toe en Javascript

## Description
Le projet suivant cherche à reproduire un jeu de morpion (ou tic-tac-toe en anglais) en Javascript.  
Le jeu est développé en HTML, CSS et JavaScript à l'aide de l'IDE Visual Studio Code.

## Règles du jeu
- Le jeu se joue à 2 joueurs. Ils jouent chacun leur tour.
- L'aire de jeu se compose d'une grille de 9 cases (3x3).
- Chaque joueur dessine un 'X' ou un 'O' sur une case à la fois.
- Il est d'usage de laisser le joueur dessinant les 'X' commencer la partie.
- Un joueur gagne la partie s'il réussit à dessiner une ligne, une colonne ou une diagonale de son signe (exemples où 'X' gagne) :  

<table style="width:300px;height:300px">
	<tr style="height:100px">
		<td>X</td><td>O</td><td>O</td>
	</tr>
	<tr style="height:100px">
		<td>X</td><td></td><td></td>
	</tr>
	<tr style="height:100px">
		<td>X</td><td></td><td></td>
	</tr>
</table>  

<table style="width:300px;height:300px">
	<tr style="height:100px">
		<td>X</td><td>X</td><td>X</td>
	</tr>
	<tr style="height:100px">
		<td>O</td><td></td><td></td>
	</tr>
	<tr style="height:100px">
		<td>O</td><td></td><td></td>
	</tr>
</table>  

<table style="width:300px;height:300px">
	<tr style="height:100px">
		<td>X</td><td></td><td></td>
	</tr>
	<tr style="height:100px">
		<td>O</td><td>X</td><td></td>
	</tr>
	<tr style="height:100px">
		<td>O</td><td></td><td>X</td>
	</tr>
</table>  

- Si aucun joueur ne parvient à dessiner une ligne, une colonne ou une diagonale, il y a égalité et l'on recommence la partie.

## Éventuelles poursuites
- Bouton "Recommncer la partie".
- Champs permettant aux joueurs de renseigner leurs noms avant la partie.
- Afficher le nom du joueur qui a gagné, et pas seulement le signe ('X' ou 'O').
- Améliorer la partie visuelle du jeu

## Installation
npm install vue

## Exécution
Double-clic sur le fichier "index.html".

## Auteur
Timothée GAROT
