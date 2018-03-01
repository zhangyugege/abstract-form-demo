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
    schema,
    model
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
    render(createElement) {
      return createElement(
        "div",
        {
          class: this.containerClassName
        },
        this.recursiveGenElement(
          createElement,
          this.schema,
          this.model
        )
      );
    },
    recursiveGenElement(createElement, schema, value, onChange) {
      return schema.map((itm, idx) => {
        return createElement(this.getElement(itm), {
          key: idx,
          props: {
            label: itm.label,
            desc: itm.desc,
            value: value[itm.model||undefined]
          }
        },
        this.recursiveGenElement(
            createElememt,
            schema.items,
            schema.model || undefined
        ));
      });
    }
  }
};
</script>
