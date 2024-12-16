# BARTENDER

group 3 project 1 
A recipe book for bartenders

## description

A web page to display recipe book, add new recipes, edit existing recipes
user can search recipes or browse in order added

## design

### drink object

drink = {
	title,
	ingredients,
	steps
}
title is the name of the drink
ingredients is an array of strings. The ingredients will be displayed in an unordered list.
steps is an array of strings. The steps will be displayed in an ordered list

### local storage

The recipe book will be stored as an array of drink objects. 

### card carousel

on load, display a card in carousel for each drink. If user enters a filter in the search bar, display only matching recipes. If no matching recipes, display a message.

### add/edit/delete

If user clicks Add button, prompt for name of new drink. If that name is already defined, show alert. Otherwise show page for editing new drink.

If user clicks Edit button for an existing drink, show page for editing that drink.

If user clicks Delete button, confirm the action and then remove that drink from the array.

When editing is complete, reload the card carousel.
