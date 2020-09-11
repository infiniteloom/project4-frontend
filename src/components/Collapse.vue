<template>
  <section>
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-primary"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >
        Click me!
      </button>
      <div class="notification">
        <div class="content">
          <h3>
            Example
          </h3>
          <p>
            This is meant to be an example of using Buefy, we just take Buefy
            sample code and make it into a individual component file like this
            we can import into our other components.
          </p>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "Collapse",
};
</script>
