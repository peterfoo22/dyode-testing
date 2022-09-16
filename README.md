
Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.
How would you add the collection featured image as a banner on the collection liquid template?
Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".
Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.
Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:


 To make a line of text editable in the Theme Customization.  In Shopify 2.0 you would create a section with a “textarea” setting in the JSON schema.  Clients would have to edit this section through the theme customizer through Shopify CMS.
I would again use the Shopify Section 2.0 to create another section through Shopify Liquid code.  You would use image picker settings to be able to customize image.  You can either use the image_url tag in liquid filter, or use the new image tagging for images to create a responsive image.  I would also recommend to use lazy loading, and also use JPG images to ensure that the page is not bog down with the large size of this image.  
   {% paginate collection.products by 5 %}
     {% for product in collection.products %}
		<% comment %> Product Grid Card <% endcomment %>
     {% endfor %}
   {% endpaginate %}

 {% assign my_product = all_products['Blue T Shirt']' %},  {% assign product.id = my_product.id %}, {% assign product.title = product_title %}, {% assign product.handle = product_handle %}, {% assign product.id = product_id %}, {% assign product.price = product_price %}, {% assign product.url = product_url %}, {% assign product..featured_image = product_featured-image %}

{% assign my_array = ["fruit:apple", "vegetable:carrot", "cloth:t-shirt", "denim:jeans"] %}

{% assign keyArray = "" %}

{% for eachObject in my_array  %}
  {% assign key = eachObject | split: ':' | first %}
  {% assign keyArray = keyArray| append: ',' | append: key %}
{% endfor %}

{% assign keyArray = keyArray | remove_first: ',' | split: ',' %}
