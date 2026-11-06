# Min ToDo-app

## Om projektet
Jag har byggt en enkel ToDo-app med React, JavaScript och CSS.

Man kan lägga till uppgifter, markera uppgifter som klara och radera uppgifter.

## State i React
Jag använder useState för att spara uppgifterna i todos och texten som användaren skriver i input.

När jag använder setTodos eller setInput uppdateras informationen på skärmen.

## Immutabilitet
Jag ändrar inte den gamla arrayen direkt.

När jag lägger till en uppgift använder jag [...todos, newTodo] för att skapa en ny array.

När jag markerar en uppgift använder jag map() och när jag raderar en uppgift använder jag filter().

## Kodgranskning
Om man använder todos.push() ändrar man den gamla arrayen direkt.

Det är bättre att skapa en ny array och använda setTodos för att uppdatera state i React.

## Reflektion
Jag har lärt mig mer om React och hur useState fungerar.

Jag har också lärt mig hur man kan lägga till, ändra och ta bort information i en lista.

Jag har testat appen flera gånger för att kontrollera att funktionerna fungerar.

## Teknik
- React
- JavaScript
- CSS