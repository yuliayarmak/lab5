class TemplateProcessor{
    render(view){
        const root = document.getElementById('main');
        root.innerHTML = view;
    }
}


export default TemplateProcessor;