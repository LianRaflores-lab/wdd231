const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",

    sections: [
        {
            sectionNum: 1,
            enrolled: 25,
            instructor: "Dr. Smith"
        },
        {
            sectionNum: 2,
            enrolled: 30,
            instructor: "Prof. Jones"
        },
        {
            sectionNum: 3,
            enrolled: 28,
            instructor: "Dr. Brown"
        },
        {
            sectionNum: 4,
            enrolled: 22,
            instructor: "Prof. Davis"
        }
    ],

    changeEnrollment: function (sectionNum, add = true) {
        const section = this.sections.find(
            (section) => section.sectionNum === sectionNum
        );

        if (section) {
            if (add) {
                section.enrolled++;
            } else if (section.enrolled > 0) {
                section.enrolled--;
            }
        }
    }
};

export default byuiCourse;