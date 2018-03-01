<template>
    <div class="layout">
        <label class="label">{{ label }}</label>
        <textarea
            :value="value"
            :placeholder="desc"
        >
        </textarea>
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
