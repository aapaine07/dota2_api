const express = require('express')
const app = express()
const PORT = 8000

const dotaHeroes = {
    'abbadon': {
        'name': 'Abaddon',
        'attribute': 'Strength',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'alchemist':{
        'name': 'Alchemist',
        'attribute': 'Strength',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'ancient apparition':{
        'name': 'Ancient Apparition',
        'attribute': 'Intelligence',
        'complexity': 2,
        'attackType': 'Ranged'
    },
    'anti-mage':{
        'name': 'Anti-Mage',
        'attribute': 'Agility',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'arc warden':{
        'name': 'Arc Warden',
        'attribute': 'Agility',
        'complexity': 3,
        'attackType': 'Ranged'
    },
    'axe':{
        'name': 'Axe',
        'attribute': 'Strength',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'bane':{
        'name': 'Bane',
        'attribute': 'Intelligence',
        'complexity': 2,
        'attackType': 'Ranged'
    },
    'batrider':{
        'name': 'Batrider',
        'attribute': 'Intelligence',
        'complexity': 2,
        'attackType': 'Ranged'
    },
    'beastmaster':{
        'name': 'Beastmaster',
        'attribute': 'Strength',
        'complexity': 2,
        'attackType': 'Melee'
    },
    'bloodseeker':{
        'name': 'Bloodseeker',
        'attribute': 'Strength',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'bounty hunter':{
        'name': 'Bounty Hunter',
        'attribute': 'Agility',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'brewmaster':{
        'name': 'Brewmaster',
        'attribute': 'Strength',
        'complexity': 3,
        'attackType': 'Melee'
    },
    'bristleback':{
        'name': 'Bristleback',
        'attribute': 'Strength',
        'complexity': 1,
        'attackType': 'Melee'
    },
    'broodmother':{
        'name': 'Broodmother',
        'attribute': 'Agility',
        'complexity': 2,
        'attackType': 'Melee'
    },
    'unknown':{
        'name': 'unknown',
        'attribute': 'unknown',
        'complexity': 'unknown',
        'attackType': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const heroName = request.params.name.toLowerCase()
    if (dotaHeroes[heroName]){
        response.json(dotaHeroes[heroName])
    }else{
        response.json(dotaHeroes['unknown'])
    }
    
})

app.listen( process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})