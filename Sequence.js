mgraphics.init();
mgraphics.autofill = 0;
mgraphics.relative_coords = 0;

var numSteps = 16;
let stepGap = 8;

var stepCenterCoordinates = Array.from(Array(numSteps), () => new Array(2));
var stepStatuses = Array(numSteps).fill(false);
var stepRadius = 0.0;

function paint() {    
    let [width, height] = mgraphics.size;
    
    // The sequence is bounded by the largest square that can be formed within the bounds.
    let boundingSequenceSquareLength = Math.min(width, height);
    
    // Calculate the angle between each step centers.
    let angleBetweenStepCenters = 2 * Math.PI / numSteps;
    
    // Calculate the radius of the sequence and its steps in a way that maximizes the size of the steps while ensuring the steps do not exceed the bounds of the largest square.
    let sequenceRadius = (boundingSequenceSquareLength + stepGap) / (2 * (1 + Math.sin(angleBetweenStepCenters / 2)));
    stepRadius = sequenceRadius * Math.sin(angleBetweenStepCenters / 2) - (stepGap / 2);
    
    // Offsets for centering the sequence within the bounds.
    let xOffset = width > height ? (width - height) / 2 : 0;
    let yOffset = height > width ? (height - width) / 2 : 0;
    
    // Calculate the center point of the sequence.
    let sequenceCenterX = boundingSequenceSquareLength / 2;
    let sequenceCenterY = boundingSequenceSquareLength / 2;
    
    // Draw the sequence/steps. Sequence steps follow in a clockwise order with the first step located at the "12 O'Clock" position.
    var currentStepCenterAngle = Math.PI / 2;
    for (var i = 0; i < numSteps; i++) {
        let stepCenterX = (xOffset + sequenceCenterX) + (sequenceRadius * Math.cos(currentStepCenterAngle));
        let stepCenterY = (yOffset + sequenceCenterY) - (sequenceRadius * Math.sin(currentStepCenterAngle));
        stepCenterCoordinates[i][0] = stepCenterX;
        stepCenterCoordinates[i][1] = stepCenterY;
        mgraphics.set_source_rgba(1.0, 0.0, 0.0, stepStatuses[i] == true ? 1.0 : 0.5);
        mgraphics.ellipse(stepCenterX - stepRadius, stepCenterY - stepRadius, 2*stepRadius, 2*stepRadius);
        mgraphics.fill();
        currentStepCenterAngle -= angleBetweenStepCenters;
    }
}

function setNumSteps(numSteps) {
    this.numSteps = numSteps;
    stepCenterCoordinates = Array.from(Array(numSteps), () => new Array(2));
    stepStatuses = Array(numSteps).fill(false);
    mgraphics.redraw();
}

function onclick(x, y) {
    for (var i = 0; i < stepCenterCoordinates.length; i++) {        
        let distance = Math.sqrt(Math.pow(x - stepCenterCoordinates[i][0], 2) + Math.pow(y - stepCenterCoordinates[i][1], 2));
        if (distance < stepRadius) {
            // Toggle the step status.
            stepStatuses[i] = !stepStatuses[i];
            outlet(0, stepStatuses);
            mgraphics.redraw();
        }        
    }
}