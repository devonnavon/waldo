## waldo

backend stores rectangle coordinates:

character-placement:
[{
character: 'harrison-ford',
topLeft: (439,1385),
bottomRight: (469,1425),
}]

onpage load we query character placement

foreach character in character placement:
add character-area to the
<characterMap>

also we will populate character list

create hidden rectangle divs that show on click
