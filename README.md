
<h2>Liquid Challenge Questions</h2>

<ol>
    <li>
        <p>Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.</p>
        <ol>
            <li>
                <p>To make a line of text editable in the Theme Customization. &nbsp;In Shopify 2.0 you would create a section with a &ldquo;textarea&rdquo; setting in the JSON schema. &nbsp;Clients would have to edit this section through the theme customizer through Shopify CMS.</p>
            </li>
        </ol>
    </li>
    <li>
        <p>How would you add the collection featured image as a banner on the collection liquid template?</p>
        <ol>
            <li>
                <p>I would again use the Shopify Section 2.0 to create another section through Shopify Liquid code. &nbsp;You would use image picker settings to be able to customize image. &nbsp;You can either use the image_url tag in liquid filter, or use the new image tagging for images to create a responsive image. &nbsp;I would also recommend to use lazy loading, and also use JPG images to ensure that the page is not bog down with the large size of this image. &nbsp;</p>
            </li>
        </ol>
    </li>
    <li>
        <p>Using liquid code and HTML, create a simple pagination container, &quot;&lt; 1 2 ... 5 &gt;&quot;.</p>
        <ol>
            <li>
                <p>&nbsp; &nbsp;{% paginate collection.products by 5 %}</p>
            </li>
        </ol>
    </li>
</ol>
<p> {% paginate collection.products by 5 %}</p>
<p>   {% for product in collection.products %}</p>
<p>		<% comment %> Product Grid Card <% endcomment %></p>
    <p>   {% endfor %} </p>
<p>  {% endpaginate %}</p>
<ol start="4">
    <li>
        <p>Using liquid code, access the product named &quot;Blue T-Shirt&quot;. Store the id, title, handle, price, url, and image in variables.</p>
        <ol>
            <li>
                <p>{% assign my_product = all_products[&apos;Blue T Shirt&apos;]&apos; %}, &nbsp;{% assign product.id = my_product.id %}, {% assign product.title = product_title %}, {% assign product.handle = product_handle %}, {% assign product.id = product_id %}, {% assign product.price = product_price %}, {% assign product.url = product_url %}, {% assign product..featured_image = product_featured-image %}</p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="5">
    <li>
        <p>Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:</p>
        <ol>
            <li>
                <p>{% assign my_array = [&quot;fruit:apple&quot;, &quot;vegetable:carrot&quot;, &quot;cloth:t-shirt&quot;, &quot;denim:jeans&quot;] %}</p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<p>{% assign keyArray = &quot;&quot; %}</p>
<p><br></p>
<p>{% for eachObject in my_array &nbsp;%}</p>
<p>&nbsp; {% assign key = eachObject | split: &apos;:&apos; | first %}</p>
<p>&nbsp; {% assign keyArray = keyArray| append: &apos;,&apos; | append: key %}</p>
<p>{% endfor %}</p>
<p><br></p>
<p>{% assign keyArray = keyArray | remove_first: &apos;,&apos; | split: &apos;,&apos; %}</p>
