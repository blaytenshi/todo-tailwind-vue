<template>
    <div>
        <!-- v-model binds the v-model prop to a matching data property -->
        <!-- it ignores any initial value, checked or selected values already in the form element -->
        <!-- the v-model property will be linked to the value property in text, select and select fields -->
        <!-- it will also be linked to the checked property in any checkbox and radio button fields -->
        <h1>Form Handling Page</h1>
        <div>
            <!-- here is an example of a simple input field that will pass data to the data.message property -->
            <!-- the message will then be displayed in the message tag -->
            <input class="input mx-1" v-model="message" placeholder="edit meeeeee" />
            <p class="mx-1">Message: {{ message }}</p>
        </div>
        <hr class="m-4"/>
        <div>
            <MyInput v-model="myValue" placeholder="capitalize this!" @inputChanged="changeMyInputValue"/>
            <p class="mx-1">Outside Component: {{ myValue }}</p>
        </div>
        <hr class="m-4"/>
        <div>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option value="cocaCola">Coca Cola</option>
                <option value="pepsi">Pepsi</option>
                <option value="water">Water</option>
                <option value="coffee">Coffee</option>
                <option value="mangoJuice">Mango Juice</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <hr class="m-4"/>
        <div>
            <p>Checkboxes</p>
            <MyCustomCheckbox
                    v-for="(checkbox) in checkboxes"
                    :checkbox="checkbox"
                    :key="checkbox.name"
            />
        </div>
    </div>
</template>

<script>
    import MyInput from '../../components/MyInput';
    import MyCustomCheckbox from '../../components/MyCustomCheckbox';

    export default {
        name: 'FormHandlingPage',
        components: {
            MyInput,
            MyCustomCheckbox
        },
        data: function() {
            return {
                message: '',
                selected: '',
                myValue: '',
                checkboxes: [
                    { name: "Option 1", value: "option1", checked: false },
                    { name: "Option 2", value: "option2", checked: true }
                ]
            }
        },
        methods: {
            changeMyInputValue: function(value) {
                console.log("new value", value);
                this.myValue = value ? value[0].toUpperCase() + value.slice(1) : ''
            }
        }
    }
</script>
