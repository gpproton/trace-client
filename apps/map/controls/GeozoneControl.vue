<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
import { defineComponent } from 'vue';

export const propTypes = {
  test: {
    type: String,
    required: false,
    custom: true,
  },
};

defineComponent({
  name: 'GeozoneControl',
  props: propTypes,
  setup(props, context) {
    // here

    return {};
  },
  render() {
    return null;
  },
});
</script>
