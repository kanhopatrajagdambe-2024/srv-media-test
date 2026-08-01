import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ParticipatingSchools } from './components/ParticipatingSchools';
import { SchoolCategories } from './components/SchoolCategories';
import { PreScheduleBanner } from './components/PreScheduleBanner';
import { WhyVisitCarousel } from './components/WhyVisitCarousel';
import { BlogsSection } from './components/BlogsSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import type { FormState, BlogPost } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<'exhibition' | 'blogs'>('exhibition');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'form' | 'success' | 'blog'>('form');
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleFormSuccess = (data: FormState) => {
    setSubmittedData(data);
    setModalType('success');
    setIsModalOpen(true);
  };

  const handleOpenRegisterModal = () => {
    setModalType('form');
    setIsModalOpen(true);
  };

  const handlePreScheduleClick = () => {
    const formElement = document.getElementById('register-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenRegisterModal();
    }
  };

  const handleSelectCategory = (categoryTitle: string) => {
    setModalType('form');
    setIsModalOpen(true);
    console.log(`User interested in category: ${categoryTitle}`);
  };

  const handleReadBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setModalType('blog');
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRegisterModal={handleOpenRegisterModal}
      />

      <main id="main-content">
        {activeTab === 'exhibition' ? (
          <>
            <Hero onFormSuccess={handleFormSuccess} />
            <ParticipatingSchools />
            <SchoolCategories onSelectCategory={handleSelectCategory} />
            <PreScheduleBanner onPreScheduleClick={handlePreScheduleClick} />
            <WhyVisitCarousel />
          </>
        ) : (
          <BlogsSection onReadPost={handleReadBlog} />
        )}
      </main>

      <Footer />

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        submittedData={submittedData}
        selectedBlog={selectedBlog}
        onSuccess={handleFormSuccess}
      />
    </div>
  );
}

export default App;
