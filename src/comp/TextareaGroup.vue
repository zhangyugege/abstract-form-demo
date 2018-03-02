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
    name: 'TextareaGroup',
    props: {
        desc: String,
        value: String,
        label: String
    }

};
</script>
<style>

</style>
