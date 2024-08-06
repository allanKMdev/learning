class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []
        self.max_books = 3  # Default maximum books

    def borrow_book(self, book):
        if len(self.borrowed_books) < self.max_books:
            self.borrowed_books.append(book)
            book.borrow()
            return True
        else:
            print("Maximum number of books reached")
            return False

    def return_book(self, book):
        if book in self.borrowed_books:
            self.borrowed_books.remove(book)
            book.return_book()
            return True
        else:
            print("Book not borrowed by this member")
            return False

    def __str__(self):
        return f"Name: {self.name}, Member ID: {self.member_id}, Borrowed Books: {self.borrowed_books}"
