def main():
    library = Library()

    # Add books
    book1 = Book("Python Crash Course", "Eric Matthes", "ISBN123")
    book2 = Book("Clean Code", "Robert C. Martin", "ISBN456")
    library.add_book(book1)
    library.add_book(book2)

    # Add members
    member1 = Member("Alice", "M123")
    member2 = PremiumMember("Bob", "M456")  # Premium member
    library.register_member(member1)
    library.register_member(member2)

    # Borrow and return books
    library.borrow_book("M123", "ISBN123")
    library.borrow_book("M456", "ISBN123")  # Premium member can borrow more
    library.return_book("M123", "ISBN123")

    print(library)

if __name__ == "__main__":
    main()
