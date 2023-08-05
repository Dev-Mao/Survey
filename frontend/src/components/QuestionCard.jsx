const QuestionCard = ({question}) => {
    return(
        <div className='card-question'>
            <span>{question.questionText}</span>            
            <div className='img-container'>
                {question.img && <img src={question.img} alt={question.questionText} className="question-image" />}
            </div>
            {/* Mostrar las opciones correctamente */}
            {question.options.map(option => (
              <div key={option._id}>
                <span>{option.letter}: {option.text}</span>
                {option.imageUrl && <img src={option.imageUrl} alt={option.text} />}
              </div>
            ))}
          </div>
    )
}

export default QuestionCard;