class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def add_book(self, book):
        self.books.append(book)

    def register_member(self, member):
        self.members.append(member)

    def find_book(self, isbn):
        for book in self.books:
            if book.isbn == isbn:
                return book
        return None

    def find_member(self, member_id):
        for member in self.members:
            if member.member_id == member_id:
                return member
        return None

    def borrow_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if member and book and not book.is_borrowed:
            if member.borrow_book(book):
                print(f"{member.name} borrowed {book.title}")
            else:
                print("Borrowing failed")
        else:
            print("Book is not available or member not found")

    def return_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if member and book and book in member.borrowed_books:
            if member.return_book(book):
                print(f"{member.name} returned {book.title}")
            else:
                print("Returning failed")
        else:
            print("Book is not borrowed by this member or book not found")

    def __str__(self):
        return f"Books: {self.books}\nMembers: {self.members}"
