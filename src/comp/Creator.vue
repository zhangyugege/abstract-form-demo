<script>
import InputGroup from "./InputGroup";
import TextareaGroup from "./TextareaGroup";

export default {
  name: "Creator",
  components: {
    InputGroup,
    TextareaGroup
  },
  props: {
    schema: Array,
    model: Object
  },
  render(h) {
    return h(
      "div",
      {
        class: 'creator-itm'
      },
      this.recursiveGenElement(
        h,
        this.schema,
        this.model
      )
    );
  },
  methods: {
    getElement(schema) {
      switch (schema.type) {
        case "input":
          return InputGroup;
        case "textarea":
          return TextareaGroup;
      }
    },
    recursiveGenElement(createElement, schema, value) {
      if (!schema) return ;
      return schema.map((itm, idx) => {
        return createElement(this.getElement(itm), {
          key: idx,
          props: {
            label: itm.label,
            desc: itm.desc,
            value: (value && value[itm.model]) ? value[itm.model] : undefined
          }
        },
        this.recursiveGenElement(
            createElement,
            schema.items,
            schema.model || undefined
        ));
      });
    }
  }
};
</script>
