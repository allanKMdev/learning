
inventory = {
    'Laptop': {'price': 999.99, 'quantity': 10},
    'Smartphone': {'price': 499.99, 'quantity': 25},
    'Headphones': {'price': 89.99, 'quantity': 50},
    'Keyboard': {'price': 29.99, 'quantity': 75}
}

def add_product(name, price, quantity):
    """Add a new product to the inventory."""
    if name in inventory:
        print(f"Product '{name}' already exists. Use update_product to modify it.")
    else:
        inventory[name] = {'price': price, 'quantity': quantity}
        print(f"Added product '{name}'.")

def update_product(name, price=None, quantity=None):
    """Update the details of an existing product."""
    if name in inventory:
        if price is not None:
            inventory[name]['price'] = price
        if quantity is not None:
            inventory[name]['quantity'] = quantity
        print(f"Updated product '{name}'.")
    else:
        print(f"Product '{name}' does not exist. Use add_product to add it.")

def remove_product(name):
    """Remove a product from the inventory."""
    if name in inventory:
        del inventory[name]
        print(f"Removed product '{name}'.")
    else:
        print(f"Product '{name}' does not exist.")

def display_inventory():
    """Display all products in the inventory."""
    if inventory:
        print("Current Inventory:")
        for name, details in inventory.items():
            print(f"Name: {name}, Price: ${details['price']:.2f}, Quantity: {details['quantity']}")
    else:
        print("Inventory is empty.")

def main():
    """Main function to interact with the user."""
    while True:
        print("\nInventory Management System")
        print("1. Add Product")
        print("2. Update Product")
        print("3. Remove Product")
        print("4. Display Inventory")
        print("5. Exit")

        choice = input("Choose an option: ")

        if choice == '1':
            name = input("Enter product name: ")
            price = float(input("Enter product price: "))
            quantity = int(input("Enter product quantity: "))
            add_product(name, price, quantity)
        elif choice == '2':
            name = input("Enter product name: ")
            price = input("Enter new price (or press Enter to keep current): ")
            quantity = input("Enter new quantity (or press Enter to keep current): ")
            price = float(price) if price else None
            quantity = int(quantity) if quantity else None
            update_product(name, price, quantity)
        elif choice == '3':
            name = input("Enter product name: ")
            remove_product(name)
        elif choice == '4':
            display_inventory()
        elif choice == '5':
            print("Exiting the system.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
