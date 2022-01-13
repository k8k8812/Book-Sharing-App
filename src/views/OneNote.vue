<template>
    <div class="info-container row ">

        <div class="info-container-leftbox col-6 col-md-4" >
            <div class="leftbox-img">
                <img src=""  alt="bookimge" > 

            </div>
        </div>

        <div class="info-container-rightbox col-md-8">
            <div class="rightbox-noteinfo">
                <div class="book-title">
                    <p> here's the title: {{ id }}</p> 
                </div>
                <div class="book-author">
                    <p> Here's the author: {{ }} </p>
                </div>
                <div class="book-descriptions">
                    <p> book des: {{ }}</p>
                </div>
                <div class="book-ratings">

                </div>

            </div>
        </div>

        <div class="operations-container row">

        </div>

    </div>

    
</template>

<script>
export default {
   props: ['id'], 
}
</script>

<style scoped>

.info-container {
    border: solid;
    background-color:cornflowerblue;
    margin: 2vh 5vh 2vh 8vh;
    min-height: 70vh ;
}

.leftbox-img {
    border:solid;
}

.rightbox-noteinfo {
    border: solid;
}
</style>