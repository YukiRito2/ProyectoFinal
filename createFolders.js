import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Lista de carpetas que necesitas crear
const folders = [
    'src/app',
    'src/app/Alert',
    'src/app/assets',
    'src/app/assets/font',
    'src/app/components',
    'src/app/components/Buttons',
    'src/app/components/card',
    'src/app/components/DropDown',
    'src/app/components/Inputs',
    'src/app/components/Table',
    'src/app/components/UI',
    'src/app/components/utils',
    'src/app/config',
    'src/app/constants',
    'src/app/context',
    'src/app/helpers',
    'src/app/helpers/Formats',
    'src/app/helpers/Validators',
    'src/app/hooks',
    'src/app/layout',
    'src/app/pages',
    'src/app/pages/Categorize',
    'src/app/pages/Categorize/Categories',
    'src/app/pages/Categorize/Categories/Button',
    'src/app/pages/Categorize/Categories/forms',
    'src/app/pages/Categorize/Subcategories',
    'src/app/pages/Categorize/Subcategories/forms',
    'src/app/pages/Categorize/variant',
    'src/app/pages/Categorize/variant/Form',
    'src/app/pages/Configuration',
    'src/app/pages/Publicity',
    'src/app/pages/Publicity/forms',
    'src/app/pages/Roles',
    'src/app/pages/Roles/Forms',
    'src/app/pages/Staff',
    'src/app/pages/Staff/conditions',
    'src/app/pages/Staff/Forms',
    'src/app/providers',
    'src/app/routes',
    'src/app/styles',
    'src/app/types',
    'src/app/utils',
    'src/config',
    'src/lib',
    'src/lib/application',
    'src/lib/application/useCases',
    'src/lib/core',
    'src/lib/core/domain',
    'src/lib/core/domain/types',
    'src/lib/core/service',
    'src/lib/infrastructure',
    'src/lib/infrastructure/http'
];

// Función para crear las carpetas
folders.forEach(folder => {
    const folderPath = join(process.cwd(), folder);
    if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
        console.log(`Carpeta creada: ${folderPath}`);
    } else {
        console.log(`La carpeta ya existe: ${folderPath}`);
    }
});
