class SoftStaff:
      companyName = 'space X'
      
      def __init__(self, pSalary):
    self.salary = pSalary 
    
    def printInfo(self):
        print("company name is",Softstaff.companyName)
        print("Salary is", self.salary)
        
        
        # instances
        Softstaff .companyName ='Microsoft'
        shawn = Softstaff (280000)
        joan = Softstaff (170000)
    
    shawn.salary = 300000
    # print(shawn.companyName)
    print(shawn.salary)
          