<template>
    <div class="layout">
        <label class="label">{{ label }}</label>
        <textarea
            :value="value"
            :placeholder="desc"
        >
    </div>
</template>
<script>
export default {
    name: 'InputGroup',
    props: {
        desc,
        value,
        label
    }

};
</script>
<style>

</style>
