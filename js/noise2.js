export function noise2(X, Width, Height) {
    let nx = X/Width - 0.5;
    let ny = 0;
    let total = 0;
    let frequency = .7;

    for (let o = 0; o < 8; o++) {
        total += noise.simplex2(frequency * nx, frequency*ny)/frequency

        frequency *= 2;
    }

    let x = Width/2;
    let y = Height/2;




    return (total*total);

}


//noise.simplex2(nx, ny)