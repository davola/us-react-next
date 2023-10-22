export function parseViewPath(path: string[]): string[] {
    const viewNameNormalization: {} = {
        "why-hire-freelance-development": 'why-hire-us',
        "freelance-software-development-services": 'services'
    }

    const viewName = Reflect.get(viewNameNormalization, path[0]) || path[0];
    if (path.length === 1) {
        const subView = (viewName === 'work') ? 'featured' : '';
        return [viewName || 'home', subView];
    }

    switch (path[0]) {
        case 'freelance-software-development':
            return ['service', path[1]];
    }

    return [viewName, path[1]];
}

export function getWorkServiceName(subView: string) {

    const workServices: {} = {
        'featured': 'Featured',
        'web-application-development': 'Web Application Development',
        'mobile-development': 'Mobile Development',
        'e-commerce-development': 'E-commerce Development',
        'cms-responsive-website-development': 'Responsive Website Development',
    }
    return Reflect.get(workServices, subView) || 'Undefined Work Service';
}