# # myapp/admin.py
# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import User , Product ,ProductOption ,Category

# class CustomUserAdmin(UserAdmin):
#     model = User
#     list_display = ['email', 'username', 'is_staff', 'is_active']
#     search_fields = ['email', 'username']
#     ordering = ['email']





# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('name', 'price', 'stock', 'category', 'created_at')
#     list_filter = ('category',)
#     search_fields = ('name',)

# @admin.register(ProductOption)
# class ProductOptionAdmin(admin.ModelAdmin):
#     list_display = ('product', 'weight', 'price')
#     list_filter = ('product',)

# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description')







# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import User, Product, ProductOption, Category


# class CustomUserAdmin(UserAdmin):
#     model = User
#     list_display = ['email', 'username', 'is_staff', 'is_active']
#     search_fields = ['email', 'username']
#     ordering = ['email']
#     list_filter = ['is_staff', 'is_active']


# class ProductOptionInline(admin.TabularInline):
#     model = ProductOption
#     extra = 1  # Display one blank form by default


# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('name', 'price', 'stock', 'category', 'created_at')
#     list_filter = ('category',)
#     search_fields = ('name',)
#     readonly_fields = ('created_at',)
#     inlines = [ProductOptionInline]  # Inline view for ProductOption

#     @admin.action(description='Mark selected products as out of stock')
#     def mark_out_of_stock(self, request, queryset):
#         queryset.update(stock=0)

#     actions = [mark_out_of_stock]


# @admin.register(ProductOption)
# class ProductOptionAdmin(admin.ModelAdmin):
#     list_display = ('product', 'weight', 'price')
#     list_filter = ('product',)
#     ordering = ['product']


# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description')
#     search_fields = ('name', 'description')
#     ordering = ['name']


# # Register CustomUserAdmin
# admin.site.register(User, CustomUserAdmin)












from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Product, ProductOption, Category

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'username', 'is_staff', 'is_active']
    search_fields = ['email', 'username']
    ordering = ['email']
    list_filter = ['is_staff', 'is_active']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'category', 'created_at')
    list_filter = ('category',)
    search_fields = ('name',)
    readonly_fields = ('created_at',)

@admin.register(ProductOption)
class ProductOptionAdmin(admin.ModelAdmin):
    list_display = ('product', 'weight', 'price')
    list_filter = ('product',)
    ordering = ['product']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description')
    ordering = ['name']

admin.site.register(User, CustomUserAdmin)
