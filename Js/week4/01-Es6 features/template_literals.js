const shoppingList = (groceries) => {
    let list = '';
    groceries.forEach((item) => {
      list += `${item.item}: ${item.quantity}\n`;
    });
    return list.trim();
  };
  

  const groceries = [
    { item: 'mangoes', quantity: 5 },
    { item: 'avocados', quantity: 3 },
    { item: 'bananas', quantity: 7 },
  ];
  
  console.log(shoppingList(groceries));
  