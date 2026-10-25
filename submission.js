// Task 1: Var and Scope

// Input: assignments contains objects with id, grade, and daysLate properties.
function summarizeGrades(assignments)
{
    let sum = 0;
    const count = assignments.length;
    const LATE_PENALTY_PER_DAY = 20;

    // Keep the final assignment accessible after the loop.
    let assignment;

    for (let i = 0; i < count; i++)
    {
        assignment = assignments[i];
        let grade = assignment.grade;

        if (assignment.daysLate > 0)
        {
            const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
            grade = grade - latePenalty >= 0 ? grade - latePenalty : 0;
        }

        sum += grade;
    }

    const lastGraded = assignment;
    return { average: sum / count, lastGraded: lastGraded.id };
}


// Task 2: Closures

// Input: letter is a single-letter String; ignoreCapitalization is a Boolean.
let letterCounter = function (letter, ignoreCapitalization)
{
    const targetLetter = ignoreCapitalization ? letter.toLowerCase() : letter;

    // Input: word is a String.
    return function (word)
    {
        const letters = ignoreCapitalization ? word.toLowerCase() : word;
        let count = 0;

        for (let i = 0; i < letters.length; i++)
        {
            if (letters[i] === targetLetter)
            {
                count += 1;
            }
        }

        return count;
    };
};

// Input: characterName is a String.
function makeCharacter(characterName)
{
    // These skill levels are shared by the methods through a closure.
    let farmingSkill = 0;
    let fishingSkill = 0;

    // Only the exact skill names "farming" and "fishing" are recognized.
    let levelUp = function (skill)
    {
        if (skill === "farming" && farmingSkill < 10)
        {
            farmingSkill += 1;
        }
        else if (skill === "fishing" && fishingSkill < 10)
        {
            fishingSkill += 1;
        }
    };

    // Only the exact skill names "farming" and "fishing" are recognized.
    let showSkill = function (skill)
    {
        if (skill === "farming")
        {
            return farmingSkill;
        }
        else if (skill === "fishing")
        {
            return fishingSkill;
        }
    };

    return {
        name: characterName,
        levelUp,
        showSkill
    };
}
