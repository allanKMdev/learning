
from django.contrib import admin
from .models import Customer, InventoryItem, Sale, Debt, Product, Quicksale, QuicksaleItem

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'credit_limit', 'outstanding_balance')
    search_fields = ('name', 'email')
    list_filter = ('credit_limit',)
    ordering = ('name',)
    # date_hierarchy, fieldsets, and actions can be added as needed

@admin.register(InventoryItem)
class InventoryItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity', 'description')
    search_fields = ('name',)
    list_filter = ('price',)
    ordering = ('name',)

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ('customer', 'item', 'quantity', 'display_total_price', 'date', 'payment_status', 'payment_method')
    list_filter = ('payment_status', 'payment_method', 'date')
    search_fields = ('customer__name', 'item__name')
    date_hierarchy = 'date'
    
    @admin.display(description='Total Price')
    def display_total_price(self, obj):
        return f"${obj.total_price:.2f}"

@admin.register(Debt)
class DebtAdmin(admin.ModelAdmin):
    list_display = ('customer', 'amount', 'due_date', 'status')
    list_filter = ('status', 'due_date')
    search_fields = ('customer__name',)
    ordering = ('due_date',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'weight', 'quantity_in_stock')
    search_fields = ('name',)
    list_filter = ('price',)
    ordering = ('name',)

class QuicksaleItemInline(admin.TabularInline):
    model = QuicksaleItem
    extra = 1  # To display an additional empty form

@admin.register(Quicksale)
class QuicksaleAdmin(admin.ModelAdmin):
    list_display = ('customer', 'sale_date', 'payment_method', 'total_price', 'is_paid')
    list_filter = ('payment_method', 'is_paid', 'sale_date')
    search_fields = ('customer__name',)
    date_hierarchy = 'sale_date'
    inlines = [QuicksaleItemInline]

@admin.register(QuicksaleItem)
class QuicksaleItemAdmin(admin.ModelAdmin):
    list_display = ('sale', 'product', 'quantity', 'price_per_item', 'display_total_price')
    list_filter = ('sale__sale_date',)
    search_fields = ('sale__customer__name', 'product__name')
    
    @admin.display(description='Total Price')
    def display_total_price(self, obj):
        return f"${obj.total_price:.2f}"


