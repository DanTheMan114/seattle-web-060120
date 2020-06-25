# SWBATS
1. Review Create/Update for a pokemon ( Forms and REST)
2. Implement Delete
3. Strong params
4. DRY up our code with filters `before_action && skip_before_action`
5. Add in a new Trainers Model, and build out these 4 deliverables for it
    - As a site visitor, I should be able to see a list of all the trainers ( trainer has_many pokemons, pokemon belongs to a trainer)
        1. What new model(s) do I need?
        - New class?
            -`trainer.rb`
        - New migration? (i.e. does the schema need to change?)
            - `adding in our trainers table with  name,age,hometown`
            - `add a column to pokemon for trainer_id` (one to many)
            - join with trainer_id, and pokemon_id ( many to many)
        - Associations?
            `pokemon belongs_to trainer`
            `trainer has_many pokemon`
        - Seeds? 
            - mondified the seeds to account for trainer
    2. What route(s) do I need?
        - get  `/trainers`, index
    3. What Controller do I need?
        - index
    4. What view(s) do I need?
        - index
    - As a site visitor, I should be able to view a single trainer.  I should be able to see the trainer's name and a list of their pokemons.
    - As a trainer, I should be able to select a list of pokemons to add to my collection
6. Validations for our attributes through form

## Questions to ask for each deliverable:
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds? 
    2. What route(s) do I need?
    3. What Controller do I need?
    4. What view(s) do I need?

# Resources
1. [Link to Visuals](https://app.creately.com/diagram/s7hujpPuOhy/view)