import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
	return (
		<section className="menu-page">
			<section className="menu">
				<p className="menu-title">Main Menu</p>
				<p className="section-header">Hors d'oeuvres</p>
				<p className="menu-item">Soupe à L'Oignon onion, crouton, gruyere, fines herbs 14.00</p>
				<p className="menu-item">
					Salade Butter Lettuce leaf lettuce, anjou pear, tart cherries, toasted
					almonds, preserved lemon vinaigrette 13.00
				</p>
				<p className="menu-item">
					L'Escargot Bourguignon french escargot, garlic butter, pernod 14.00
				</p>
				<p className="menu-item">
					Duck Rillette housemade bread & butter pickles, toasted baguette,
					mustard 14.00
				</p>
				<p className="menu-item">
					Crab Cakes Beurre Blanc white wine butter sauce, bread & butter relish
					13.00
				</p>
				<p className="menu-item">Truffle Pommes Frites parmesan, parsley 13.00</p>
				<p className="menu-item">
					Crispy Brussels Sprouts bacon, almonds, parmesan, lemon-bacon
					vinaigrette 14.00
				</p>
				<p className="menu-item">
					Citrus Marinated Beets meyer lemon yogurt, cara cara orange, mint
					12.00
				</p>
				<p className="section-header">Les Petite Plats</p>
				<p className="menu-item">
					Celery Root Remoulade celery root, persimmon, apple,
					tarragon-buttermilk, chili oil 14.00
				</p>

				<p className="menu-item">
					Celery Root Remoulade celery root, persimmon, apple,
					tarragon-buttermilk, chili oil 14.00
				</p>
				<p className="menu-item">
					Salade de Endive blue cheese fondue, beets, cara cara orange, crispy
					shallots, dijon vinaigrette 16.00
				</p>

				<p className="menu-item">
					Salade de Truite Fumée* smoked trout, frisée, fennel, orange, goat
					cheese, pecans, dijon vinaigrette 19.00
				</p>

				<p className="menu-item">
					Salade Niçoise confit tuna, haricot vert, potato, bell pepper, egg,
					pickled red onion, olive, persian cucumber, garlic basil vinaigrette
					23.00
				</p>

				<p className="menu-item">
					Confit de Canard arugula, blueberries, maitake mushroom, roasted
					shallot vinaigrette 25.00
				</p>

				<p className="menu-item">
					Moules au Safran PEI mussels, fennel & garlic confit, saffron, white
					wine, pernod 19.00
				</p>

				<p className="menu-item">
					Roasted Bone Marrow seasoned bread crumbs, fig jam, toasted baguette
					16.00
				</p>

				<p className="section-header">Les Plats</p>

				<p className="menu-item">
					Pan-Roasted Salmon* roasted broccolini, celery root purée, beurre
					blanc, pomegranate gastrique 31.00
				</p>

				<p className="menu-item">
					Seared Dayboat Scallops* butternut squash purée, braised fennel,
					orange fumet 33.00
				</p>

				<p className="menu-item">
					Poulet Rôti roasted marys free-range chicken, bacon-lemon brussels
					sprouts, pommes frites, chicken jus 26.00
				</p>

				<p className="menu-item">
					Filet de Boeuf au Poivre* filet mignon, roasted garlic pommes purée,
					haricots verts, mushrooms, peppercorn sauce 39.00
				</p>

				<p className="menu-item">
					Le Central Cheeseburger* grass-fed wagyu beef, gruyere, bacon,
					caramelized onion, lemon aioli, brioche bun, pommes frites 21.00
				</p>

				<p className="menu-item">
					Short Rib Bourguignon cremini mushroom, pearl onion, roasted garlic
					pommes purée 37.00
				</p>

				<p className="menu-item">
					Mushrooms & Brie En Croute maitake mushroom, caramelized onion, triple
					crème brie, duxelles, frisée & watercress salad 20.00
				</p>

				<p className="section-header">La Spécialité</p>
				<p className="menu-item">
					Le Central Cassoulet white bean stew with duck confit, sausage, lamb,
					pork 31.00
				</p>
				<p className="section-header">Les Petites Assietes</p>
				<p className="menu-item">Pommes Frites 7.00</p>
				<p className="menu-item">Roasted Garlic Pommes Purée 7.00</p>
				<p className="menu-item">Sautéed Haricots Verts 10.00</p>
				<p className="menu-item">Roasted Cremini Mushrooms 10.00</p>

				<p className="section-header">DESSERT</p>
				<p className="menu-item">
					Midnight Cake Bailey's cheesecake mousse, cocoa meringue kisses,
					chocolate whipped cream 13.00
				</p>
				<p className="menu-item">
					Honey Saffron Crème Brûlée cinnamon, cardamom, rolled gaufrette 13.00
				</p>
				<p className="menu-item">Pumpkin Pot de Crème pecan praline, cinnamon whipped cream 12.00</p>

				<p className="menu-item">Buche de Noel grand marnier, creme anglaise 15.00</p>

				<p className="section-header">Fromage</p>
				<p className="menu-item">Cheese Plate $21. With toast points, jam, honeycomb, walnut</p>
				<p className="menu-item">
					Triple Creme Brie cow's milk soft rind, marin french cheese, petaluma,
					california
				</p>

				<p className="menu-item">Petite Basque sheep's milk cheese, pyrenees mountains, france</p>

				<p className="menu-item">
					Point Reyes "Bay Blue" cow's milk blue cheese, point reyes, california
				</p>

				<p className="section-header">Cafe</p>
				<p className="menu-item">Coffee 3.00</p>
				<p className="menu-item">Espresso 4.00</p>
				<p className="menu-item">Latté 4.00</p>
				<p className="menu-item">Cappuccino 4.00</p>
				<p className="menu-item">Hot Tea 3.00</p>

				<p className="section-header">HAPPY HOUR 3:00PM—7PM Bar Only</p>

				<p className="section-header">Drinks</p>
				<p className="menu-item"> *add $2 for drinks served "up"</p>
				<p className="menu-item">Well Drinks* 6.00</p>
				<p className="menu-item">Happy Hour White 6.00</p>
				<p className="menu-item">Happy Hour Red 6.00</p>
				<p className="menu-item">Draft Beer 5.00</p>

				<p className="section-header">Bites</p>

				<p className="menu-item">Pommes Frites add truffle & parmesan 7 5.00</p>

				<p className="menu-item">
					Citrus Marinated Beets meyer lemon yogurt, cara cara orange, mint 9.00
				</p>

				<p className="menu-item">Crispy Brussels Sprouts bacon, parmesan, almonds 10.00</p>

				<p className="menu-item">
					PEI Mussles fennel & garlic confit, saffron, white wine, pernod 13.00
				</p>

				<p className="menu-item">
					Duck Rillette housemade "bread & butter" pickles, toasted baguette,
					mustard 10.00
				</p>
			</section>
		</section>
	);
}

export default Menu;
