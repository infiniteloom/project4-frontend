
<template>

</template>



<script>
methods:{
    editListing: {
        fetch(`${this.$URL}/api/listings/`, {
            method: 'POST',
            headers:{
            "Content-Type": "application/json",
            "Authorization" : `JWT ${this.$route.query.user.token}`
            },
            body: JSON.stringify({
            type: this.newListing.type,
            city: this.newListing.city,
            county: this.newListing.county,
            state: this.newListing.state,
            zip: Number(this.newListing.zip),
            street: this.newListing.street,
            year_built: Number(this.newListing.year_built),
            bed: Number(this.newListing.bed),
            bath: Number(this.newListing.bath),
            home_size: Number(this.newListing.home_size),
            lot_size: parseFloat(this.newListing.lot_size),
            price: parseFloat(this.newListing.price),
            description: this.newListing.description,
            image1: this.newListing.image1,
            interested_buyers: [],
            realtor: this.$route.query.user.id
            })
        })
        .then(response => response.json())
        .then(data => {
            let createdListing = data
            console.log('Successfully created a new listing: ', createdListing)
            this.$emit("createdNewListing")
        })
    }
}
</script>