# README

# SWBATS
1. Review index and show request-response cycle
2. Introduce Create/Update/Delete
3. Introduce Forms HTML && the form_tag
4. If we have time go over filters (`before_action`, `skip_before_action`)
5. Introduce `resources` to set up our 7 RESTful routes.

# Resources
1. [Link to Visuals](https://app.creately.com/diagram/s7hujpPuOhy/view)

# Code Reference
```html
<!--Sample form tag for pokemons-->
<%= form_tag('/pokemons/:id', method: :patch) do %>
  <%= text_field_tag 'pokemon_name' %>
  <%= submit_tag 'Create Pokemon from Form Tag' %>
<% end %>
<!--If you want to see what the auth token for your form is-->
  form_authenticity_token
```