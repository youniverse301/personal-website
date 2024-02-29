export function handleScroll(setActiveSection, sectionRefs) {
    const handleScroll = () => {
        const sectionOffsets = {
            section1: sectionRefs.section1.current.offsetTop,
            section2: sectionRefs.section2.current.offsetTop,
            section3: sectionRefs.section3.current.offsetTop,
        };
        const scrollPosition = window.scrollY + 200;

        // Determine the active section
        if (scrollPosition >= sectionOffsets.section1 && scrollPosition < sectionOffsets.section2) {
            setActiveSection('section1');
        } else if (scrollPosition >= sectionOffsets.section2 && scrollPosition < sectionOffsets.section3) {
            setActiveSection('section2');
        } else if (scrollPosition >= sectionOffsets.section3) {
            setActiveSection('section3');
        }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
        document.removeEventListener('scroll', handleScroll);
    };
}
