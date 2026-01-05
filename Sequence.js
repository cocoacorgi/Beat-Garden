mgraphics.init();
mgraphics.autofill = 0;
mgraphics.relative_coords = 0;

let numSteps = 16;
let stepGap = 8;

function paint() {    
    mgraphics.set_source_rgba(1.0, 0.0, 0.0, 0.5);
    let [width, height] = mgraphics.size;
    
    // The sequence is bounded by the largest square that can be formed within the bounds.
    let boundingSequenceSquareLength = Math.min(width, height);
    
    // Calculate the angle between each step centers.
    let angleBetweenStepCenters = 2 * Math.PI / numSteps;
    
    // Calculate the radius of the sequence and its steps in a way that maximizes the size of the steps while ensuring the steps do not exceed the bounds of the largest square.
    let sequenceRadius = (boundingSequenceSquareLength + stepGap) / (2 * (1 + Math.sin(angleBetweenStepCenters / 2)));
    let stepRadius = sequenceRadius * Math.sin(angleBetweenStepCenters / 2) - (stepGap / 2);
    
    // Offsets for centering the sequence within the bounds.
    let xOffset = width > height ? (width - height) / 2 : 0;
    let yOffset = height > width ? (height - width) / 2 : 0;
    
    // Calculate the center point of the sequence.
    let sequenceCenterX = boundingSequenceSquareLength / 2;
    let sequenceCenterY = boundingSequenceSquareLength / 2;
    
    // Draw the sequence/steps. Sequence steps follow in a clockwise order with the first step located at the "12 O'Clock" position.
    var currentStepCenterAngle = Math.PI / 2;
    for (var i = 0; i < numSteps; i++) {
        let stepCenterX = (xOffset + sequenceCenterX - stepRadius) + (sequenceRadius * Math.cos(currentStepCenterAngle));
        let stepCenterY = (yOffset + sequenceCenterY - stepRadius) + (sequenceRadius * Math.sin(currentStepCenterAngle));
        mgraphics.ellipse(stepCenterX, stepCenterY, 2*stepRadius, 2*stepRadius);
        mgraphics.fill();
        currentStepCenterAngle -= angleBetweenStepCenters;
    }
}