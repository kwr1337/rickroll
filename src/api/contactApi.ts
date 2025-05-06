interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormResponse {
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<ContactFormResponse> => {
  // Имитируем отправку данных на сервер
  console.log('Form data submitted:', formData);
  
  // Имитируем задержку сетевого запроса
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Возвращаем ответ, как будто от сервера
  return {
    message: `Thank you for your interest, ${formData.name}`
  };
}; 