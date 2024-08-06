class PremiumMember(Member):
    def __init__(self, name, member_id):
        super().__init__(name, member_id)
        self.max_books = 5  # Premium members can borrow more books
