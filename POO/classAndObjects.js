class Planet{
    constructor(name, diameter, volumen, distanceFromSun, moons){
        this.name = name;
        this.diameter = diameter;
        this.volumen = volumen;
        this.distanceFromSun = distanceFromSun;
        this.moons = moons;
    }
    rotation(){
        console.log('rotating');
    }
    revolution(){
        console.log('revolution');
    }
}

class PlanetWithRings extends Planet{
    constructor(name, diameter, volumen, distanceFromSun, moons, rings){
        super(name, diameter, volumen, distanceFromSun, moons);
        this.rings = rings;
    }
}

const earth = new Planet ('Earth', '12,742 km','1,083,206,916,846 cubic kilometers', '93 million miles','1');
const saturn = new PlanetWithRings ('Saturn','116,460 km', '827,129,915,150,897 cubic kilometers', '886 million miles', '82', '7' );

console.log(earth);
console.log(saturn);