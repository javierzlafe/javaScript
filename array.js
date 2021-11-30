
        const personas = [
            {nombre: "Lucas",edad: 28},
            {nombre: "Jose",edad: 29},
            {nombre: "Matias",edad: 24},
            {nombre: "Hernan",edad: 31}];
        console.log(personas);
        let edades = personas.map(persona => persona.edad);
        let nombres= personas.map(persona => persona.nombre);
        let grandes= personas.filter(persona=>persona.edad>=29);
        
        console.log(edades.sort());
        console.log(nombres.sort());
        console.log(nombres.reverse());
        console.log(grandes);
        
