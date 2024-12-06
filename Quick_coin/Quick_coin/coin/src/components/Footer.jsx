
const Footer = () => {
    const footerStyle = {
        backgroundColor: '#1a1a1a', 
        color: '#ccc',            
        textAlign: 'center',
        padding: '30px 20px',        
        position: 'relative',
        bottom: '0',
        width: '100%',
        fontSize: '14px',            
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",  
        letterSpacing: '1px',        
    };

    return (
        <footer style={footerStyle}>
            <p>© 2024 PayPoint. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
