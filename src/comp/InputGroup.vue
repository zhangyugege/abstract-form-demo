<template>
    <div class="layout">
        <label class="label">{{ label }}</label>
        <input
            :value="value"
            :placeholder="desc"
        >
    </div>
</template>
<script>
export default {
    name: 'InputGroup',
    props: {
        desc: String,
        value: String,
        label: String
    }

};
</script>
<style>

</style>
